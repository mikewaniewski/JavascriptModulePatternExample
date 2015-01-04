   $(function () {
            $('#btnAdd').click(function () {
                var myCalculator = new CalculatorModule("myDiv");
                myCalculator.add($('#component1').val(), $('#component2').val());
            });
        });
       
         
        var CalculatorModule = function (resultDiv) {

            //private variables
            var dest = document.getElementById(resultDiv) 

             
            return {
                //expose public members
                add: function (x, y) {
                    var sum = x + " + " + y + " = " + (parseInt(x)+parseInt(y));
                    dest.innerHTML = sum;
                }
            };
        };