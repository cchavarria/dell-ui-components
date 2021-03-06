/*
 * Created by Clint_Batte on 3/24/2015.
 */
angular.module('dellUiComponents')

.directive('msCheckbox', function() {
    return {
        restrict: 'C',
        link: function () {
            $('.ms-checkbox').multipleSelect({
                placeholder: "Select title"
            });

        }
    };

})

.directive('listTree', function () {
    return {
        restrict: 'C',
        link: function ($scope, $element, $attr) {
            $element.find('.checkbox input').on('click', function(){
                if($(this).is(':checked')) {
                    $(this).parent().addClass('open');
                } else {
                    $(this).parent().removeClass('open');
                }
            });
        }
    };
})


.directive('emailValidate', function() {
    return {
        restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, element, attributes, controller) {
            $(element).blur(function () {
                var email = $(this).validate();
                var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
                if (re.test(element)) {
                    $(element).addClass('alert alert-warning');
                    $(element).tooltip({
                        title: "Please input a valid email address!",
                    });
                } else {
                    //$(this).addClass('alert alert-warning');
                }
            });
        }
    };
})


    .directive('emailCheck', function() {
    return {
        restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, element, attributes, controller) {

            //$(element).blur(function () {
            //    var string1 = $(element).val();
            //    if (string1.indexOf("@") === -1){
            //        $(element).addClass('alert alert-warning');
            //        $(element).tooltip({
            //            title: "Please input a valid email address!"
            //        });
            //    //$(element).blur();
            //    } else {
            //        $(element).removeClass('alert alert-warning');
            //        $(element).tooltip('disable');
            //    }
            //});


            $(element).on('keyup',function () {
                var string1 = $(element).val();
                var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

                if (!string1.match(regex)){
                    if(!attributes.errorMessage) {
                        attributes.errorMessage = "Please input a valid email address!";
                    }
                    $(element).addClass('alert alert-warning');
                    $(element).tooltip({
                        title: attributes.errorMessage,
                    });
                } else {
                    $(element).removeClass('alert alert-warning');
                    $(element).tooltip('destroy');
                }
            });
        }
    };
})





.directive('showPassword', function() {
return {
    restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment

        link: function($scope, $element, $attrs, controller) {
            $scope.togglePassword = function() {
                $scope.showPassword = !$scope.showPassword;
                if ($scope.showPassword) {
                    $($element).find('input[type=password]').attr('type', 'text');
                } else {
                    $($element).find('input[type=text]').attr('type', 'password');
                }
            };
        }
    };
})

.directive('phoneNumber', function() {
    // Runs during compile
    return {
        restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, element, attributes, controller) {
            //requires https://raw.githubusercontent.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.min.js
            //TODO use $locale to create mask
            if ($(element).is('input')) {
                $(element).attr('data-inputmask', "'mask': '(999)-999-9999'");
                $(element).inputmask();
            }
        }
    };
})

.directive('phoneExtension', function() {
    return {
        restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, element, attributes, controller) {

            if ($(element).is('input')) {
                $(element).attr('data-inputmask', "'mask': 'ext: (9999)'");
                $(element).inputmask();
            }
        }
    };
})

.directive('bsSlider', function() {
    return {
        restrict: 'AEC', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, element, attributes, controller) {

            // With JQuery
            $('#single-handle-ex1').slider({
                formatter: function(value) {
                    return 'Current value: ' + value;
                }
            });

            $("#single-handle-ex2").slider({
                tooltip: 'always'
            });

            $("#double-handle-ex1").slider({ id: "slider12c", min: 0, max: 10, range: true, value: [3, 7] });

        }
    };
})






//----------- spin box -------------------------------------------------------

.directive('spinbox', function() {
    return {
        restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, element, attributes, controller) {


            // Inject html code
            $( ".spinbox" ).each(function( index ) {

                var el = $( this );

                if(el.data("orient")==="vertical"){
                    $(el).addClass("dpui-numberPicker spinbox-vert").html("<button class='spinbox-increase'>"+el.data("spinincrease")+"</button><input type='text' class='spinbox-input spinbox-input-vert' style='border-top: 0px solid #cfcfcf; border-bottom: 0px solid #cfcfcf;' value='"+el.data("spindefault")+"' name='"+el.data("spinname")+"'/><button class='spinbox-decrease'>"+el.data("spindecrease")+"</button>");
                } else {
                    $(el).addClass("dpui-numberPicker").html("<button class='spinbox-decrease'>"+el.data("spindecrease")+"</button><input type='text' class='spinbox-input' style='border-left: 0px solid #cfcfcf; border-right: 0px solid #cfcfcf;' value='"+el.data("spindefault")+"' name='"+el.data("spinname")+"'/><button class='spinbox-increase'>"+el.data("spinincrease")+"</button>");
                }

            });

            // Increase Button code
            $( ".spinbox-increase" ).click(function() {
                var em = $( this );
                if(em.parent().data("orient")==="vertical" &&
                    parseInt($(this).siblings('input').val()) < em.parent().data("spinmax")){
                    $( em ).next().val( parseInt($( em ).next().val()) + em.parent().data("spinstep") );
                } else if(parseInt($(this).siblings('input').val()) < em.parent().data("spinmax")){
                    $( em ).prev().val( parseInt($( em ).prev().val()) + em.parent().data("spinstep") );
                }
            });

            // Decrease Button code
            $( ".spinbox-decrease" ).click(function() {
                var el = $( this );
                if(el.parent().data("orient")==="vertical" &&
                    parseInt($(this).siblings('input').val()) > el.parent().data("spinmin")){
                    $( el ).prev().val( parseInt($( el ).prev().val()) - el.parent().data("spinstep") );
                } else if(parseInt($(this).siblings('input').val()) > el.parent().data("spinmin")){
                    $( el ).next().val( parseInt($( el ).next().val()) - el.parent().data("spinstep") );
                }
            });

            //Checks to see if the manual input is outside the range of the min-max and changes it to bring it back in range.
            $( ".spinbox-input" ).blur(function() {
                var em = $( this );
                if(parseInt($(this).val()) > em.parent().data("spinmax")){
                    $(this).val( em.parent().data("spinmax") );
                } else if(parseInt($(this).val()) < em.parent().data("spinmin")){
                    $(this).val( em.parent().data("spinmin") );
                }
            });

            // Limits keyboard input to alphanumeric
            $(document).ready(function() {
                $('.spinbox-input').keypress(function(key) {
                    if(key.charCode < 48 || key.charCode > 57) {
                        return false;
                    }
                });
            });

        }
    };
})

//----------- /spin box -------------------------------------------------------

.directive('selectState', function() {
    // Runs during compile
    var template = '<option value="">{{ emptyName }}</option>' +
        '<option ng-repeat="state in states" value="{{state.code}}">' +
        '   {{state[label]}}' +
        '</option>';
    return {
        scope: true, // {} = isolate, true = child, false/undefined = no change
        controller: function($scope, $element, $attrs, $transclude) {

            $scope.selectedState = '';
            $scope.format = $attrs.format;
            $scope.states = [
                {
                    "code": "AL",
                    "label": "Alabama",
                    "long_label": "AL - Alabama"
                },
                {
                    "code": "AK",
                    "label": "Alaska",
                    "long_label": "AK - Alaska"
                },
                {
                    "code": "AZ",
                    "label": "Arizona",
                    "long_label": "AZ - Arizona"
                },
                {
                    "code": "AR",
                    "label": "Arkansas",
                    "long_label": "AR - Arkansas"
                },
                {
                    "code": "CA",
                    "label": "California",
                    "long_label": "CA - California"
                },
                {
                    "code": "CO",
                    "label": "Colorado",
                    "long_label": "CO - Colorado"
                },
                {
                    "code": "CT",
                    "label": "Connecticut",
                    "long_label": "CT - Connecticut"
                },
                {
                    "code": "DE",
                    "label": "Delaware",
                    "long_label": "DE - Delaware"
                },
                {
                    "code": "DC",
                    "label": "District of Columbia",
                    "long_label": "DC - District of Columbia"
                },
                {
                    "code": "FL",
                    "label": "Florida",
                    "long_label": "FL - Florida"
                },
                {
                    "code": "GA",
                    "label": "Georgia",
                    "long_label": "GA - Georgia"
                },
                {
                    "code": "HI",
                    "label": "Hawaii",
                    "long_label": "HI - Hawaii"
                },
                {
                    "code": "ID",
                    "label": "Idaho",
                    "long_label": "ID - Idaho"
                },
                {
                    "code": "IL",
                    "label": "Illinois",
                    "long_label": "IL - Illinois"
                },
                {
                    "code": "IN",
                    "label": "Indiana",
                    "long_label": "IN - Indiana"
                },
                {
                    "code": "IA",
                    "label": "Iowa",
                    "long_label": "IA - Iowa"
                },
                {
                    "code": "KS",
                    "label": "Kansas",
                    "long_label": "KS - Kansas"
                },
                {
                    "code": "KY",
                    "label": "Kentucky",
                    "long_label": "KY - Kentucky"
                },
                {
                    "code": "LA",
                    "label": "Louisiana",
                    "long_label": "LA - Louisiana"
                },
                {
                    "code": "ME",
                    "label": "Maine",
                    "long_label": "ME - Maine"
                },
                {
                    "code": "MD",
                    "label": "Maryland",
                    "long_label": "MD - Maryland"
                },
                {
                    "code": "MA",
                    "label": "Massachusetts",
                    "long_label": "MA - Massachusetts"
                },
                {
                    "code": "MI",
                    "label": "Michigan",
                    "long_label": "MI - Michigan"
                },
                {
                    "code": "MN",
                    "label": "Minnesota",
                    "long_label": "MN - Minnesota"
                },
                {
                    "code": "MS",
                    "label": "Mississippi",
                    "long_label": "MS - Mississippi"
                },
                {
                    "code": "MO",
                    "label": "Missouri",
                    "long_label": "MO - Missouri"
                },
                {
                    "code": "MT",
                    "label": "Montana",
                    "long_label": "MT - Montana"
                },
                {
                    "code": "NE",
                    "label": "Nebraska",
                    "long_label": "NE - Nebraska"
                },
                {
                    "code": "NV",
                    "label": "Nevada",
                    "long_label": "NV - Nevada"
                },
                {
                    "code": "NH",
                    "label": "New Hampshire",
                    "long_label": "NH - New Hampshire"
                },
                {
                    "code": "NJ",
                    "label": "New Jersey",
                    "long_label": "NJ - New Jersey"
                },
                {
                    "code": "NM",
                    "label": "New Mexico",
                    "long_label": "NM - New Mexico"
                },
                {
                    "code": "NY",
                    "label": "New York",
                    "long_label": "NY - New York"
                },
                {
                    "code": "NC",
                    "label": "North Carolina",
                    "long_label": "NC - North Carolina"
                },
                {
                    "code": "ND",
                    "label": "North Dakota",
                    "long_label": "ND - North Dakota"
                },
                {
                    "code": "OH",
                    "label": "Ohio",
                    "long_label": "OH - Ohio"
                },
                {
                    "code": "OK",
                    "label": "Oklahoma",
                    "long_label": "OK - Oklahoma"
                },
                {
                    "code": "OR",
                    "label": "Oregon",
                    "long_label": "OR - Oregon"
                },
                {
                    "code": "PA",
                    "label": "Pennsylvania",
                    "long_label": "PA - Pennsylvania"
                },
                {
                    "code": "RI",
                    "label": "Rhode Island",
                    "long_label": "RI - Rhode Island"
                },
                {
                    "code": "SC",
                    "label": "South Carolina",
                    "long_label": "SC - South Carolina"
                },
                {
                    "code": "SD",
                    "label": "South Dakota",
                    "long_label": "SD - South Dakota"
                },
                {
                    "code": "TN",
                    "label": "Tennessee",
                    "long_label": "TN - Tennessee"
                },
                {
                    "code": "TX",
                    "label": "Texas",
                    "long_label": "TX - Texas"
                },
                {
                    "code": "UT",
                    "label": "Utah",
                    "long_label": "UT - Utah"
                },
                {
                    "code": "VA",
                    "label": "Virginia",
                    "long_label": "VA - Virginia"
                },
                {
                    "code": "WA",
                    "label": "Washington",
                    "long_label": "WA - Washington"
                },
                {
                    "code": "WV",
                    "label": "West Virginia",
                    "long_label": "WV - West Virginia"
                },
                {
                    "code": "WI",
                    "label": "Wisconsin",
                    "long_label": "WI - Wisconsin"
                },
                {
                    "code": "WY",
                    "label": "Wyoming",
                    "long_label": "WY - Wyoming"
                },
                {
                    "code": "AA",
                    "label": "Armed Forces-Americas",
                    "long_label": "AA - Armed Forces-Americas"
                },
                {
                    "code": "AE",
                    "label": "Armed Forces-Europe",
                    "long_label": "AE - Armed Forces-Europe"
                },
                {
                    "code": "AP",
                    "label": "Armed Forces-Pacific",
                    "long_label": "AP - Armed Forces-Pacific"
                }
            ];
            switch ($attrs.format) {
                case 'short':
                    $scope.label = "code";
                    break;
                case 'both':
                    $scope.label = "long_label";
                    break;
                default:
                    $scope.label = "label";
            }
        },
        restrict: 'AC', // E = Element, A = Attribute, C = Class, M = Comment
        template: template,
        link: function($scope, $element, $attributes, controller) {
            $scope.emptyName = $attributes.emptyName || '*State';
        }
    };
})
.directive('dateSelector', function(){
    // Runs during compile
    return {
        restrict: 'C', // E = Element, A = Attribute, C = Class, M = Comment
        link: function($scope, $element, $attrs) {
            var inputField = $element.find('input'),
                calendarIcon = $element.find('.icon-small-calendar'),
                calendarWidget,
                inputFieldWidth = inputField.width(),
                inputFieldOffset = inputField.offset(), 
                viewPortWidth = $(window).width(),            
                viewPortHeight = $(window).height(),            
                dateSelectorConfig = {
                    icons: {
                        time: 'icon-small-clock',
                        date: 'icon-small-calendar',
                        up: 'glyphicon glyphicon-chevron-up',
                        down: 'glyphicon glyphicon-chevron-down',
                        previous: 'glyphicon glyphicon-chevron-left',
                        next: 'glyphicon glyphicon-chevron-right',
                        today: 'icon-small-software',
                        clear: 'icon-small-trash',
                        close: 'icon-ui-close'
                    },
                    keepOpen:true,
                    widgetPositioning: {
                        horizontal:'right',
                        vertical: typeof $attrs.position !== 'undefined' ? $attrs.position : 'bottom'
                    },
                    format: typeof $attrs.format !== 'undefined' ? $attrs.format : 'MM/DD/YYYY'
                };






            //TODO, check to see if the field is at the bottom of the viewport and position it on top
            inputField.datetimepicker(dateSelectorConfig);

            inputField.on("dp.show",function (e) {

                calendarWidget = $element.find('.bootstrap-datetimepicker-widget'); //have to repeat this because it is destroyed everytime focus is gone

                //check to see if the right side is big enough for the widget
                if(inputFieldOffset.left + inputFieldWidth + 215 > viewPortWidth) {
                    calendarWidget.removeClass('pull-right');
                } else {
                    calendarWidget.addClass('pull-right');
                }

                //check to see if the bottom side is big enough for the widget
                if(inputFieldOffset.top - window.pageYOffset + 255 > viewPortHeight) {
                    //dateSelectorConfig.widgetPositioning.vertical = "top";
                    calendarWidget.removeClass('bottom').addClass('top');
                } else {
                    calendarWidget.removeClass('bottom, top').addClass(dateSelectorConfig.widgetPositioning.vertical);
                }              

            });
            calendarIcon.on("click",function (e) {
                inputField.focus();                
            });

            inputField.on("blur",function (e) {
                e.preventDefault();
                e.stopPropagation();
                inputField.data("DateTimePicker").show();
            });




        }
    };
});
