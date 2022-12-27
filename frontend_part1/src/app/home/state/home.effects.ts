import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, mergeMap } from "rxjs";
import { PostService } from "src/app/service/post.service";
import { loadPosts, loadPostsSuccess } from "./home.actions";

@Injectable()
export class HomeEffects {
    constructor(private action$: Actions, private postService: PostService) {

    }

    loadPosts$ = createEffect(
        () => {
            return this.action$.pipe(ofType(loadPosts),
                mergeMap((action) => {
                    return this.postService.getEmployee().pipe(map((employee) => {
                        return loadPostsSuccess({ employee })
                    }))
                }))
        }

    )
}