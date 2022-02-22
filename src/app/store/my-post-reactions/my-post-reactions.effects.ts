import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as MyPostReactionsActions from './my-post-reactions.actions';
import { filter, map, switchMap } from 'rxjs/operators';
import { from } from 'rxjs';
import { ReactionsService } from '../../shared/services/reactions.service';

@Injectable()
export class MyPostReactionsEffects {
  constructor(
    private action$: Actions,
    private reactionsService: ReactionsService
  ) {}

  loadMyPostReactions$ = createEffect(() =>
    this.action$.pipe(
      ofType(MyPostReactionsActions.getGetMyPostReactionsByPostIds),
      switchMap(({ ids }) =>
        from(this.reactionsService.getReactionsIdsByPostIds(ids)).pipe(
          filter(
            (reactions) => reactions !== undefined && reactions.length > 0
          ),
          map((reactions) =>
            MyPostReactionsActions.upsertMyPostReactions({
              payload: reactions!,
            })
          )
        )
      )
    )
  );
}