angular.module('app')
    .directive('taskItems', function() {
        return {
            template: `
                <li class="list-group-item" ng-model="taskList" ng-repeat="task in taskList">
                    <button type="button" class="close cursor" aria-label="Close" ng-show="done">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="taskCheckbox" ng-model="done">
                        <label class="form-check-label" for="taskCheckbox" ng-class="{'line-through': done, 'text-muted': done}">
                            {{task.task}}
                        </label>
                    </div>
                </li>
            `
        }
    })