angular.module("Search")
    .directive("dzStyleResource", [
        'itemClassifier', function(itemClassifier) {
            return {
                scope: {
                    resource: '='
                },
                link: function(scope, element) {
                    var resourceClass = itemClassifier.determineCssClass(scope.resource.classification);
                    element.addClass(resourceClass);
                }
            }
        }
    ]);