import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { map, mergeMap, switchMap } from "rxjs";
import { PostService } from "src/app/service/post.service";
import { loadPosts, loadPostsSuccess } from "../actions/employee.actions";

@Injectable()
export class EmployeeEffects {
    constructor(private action$: Actions, private postService: PostService) {

    }

    loadPosts$ = createEffect(
        () => {
            return this.action$.pipe(ofType(loadPosts),
                switchMap((action) => {
                    return this.postService.getEmployee().pipe(map((employee) => {
                        return loadPostsSuccess({ employee })
                    }))
                }))
        }

    )
}