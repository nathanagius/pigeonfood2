var cars = []; 

$(function(){
			$('.datepicker').datepicker({
				format: 'dd/mm/yyyy'
			});
						
			var nowTemp = new Date();
			var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

			var checkin = $('#dp1').datepicker({
			  onRender: function(date) {
				return date.valueOf() < now.valueOf() ? 'disabled' : '';
			  }
			}).on('changeDate', function(ev) {
			  if (ev.date.valueOf() > checkout.date.valueOf()) {
				var newDate = new Date(ev.date)
				newDate.setDate(newDate.getDate() + 1);
				checkout.setValue(newDate);
			  }
			  checkin.hide();
			  $('#dp2')[0].focus();
			}).data('datepicker');
			var checkout = $('#dp2').datepicker({
			  onRender: function(date) {
				return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
			  }
			}).on('changeDate', function(ev) {
			  checkout.hide();
			}).data('datepicker');
				
			$.ajax({url: "http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=gbww5ka8d6wtckpf8j4j6tg9", success: function(result){
				var tempcarmakes = $('#carmakes');
				debugger;
				for(var i=0; i < result.makes.length;	i++){
					tempcarmakes.append('<option>'+result.makes[i].name+'</option>');
				}
				$('.selectpicker').selectpicker('refresh');
			}});	
			
	
			});
		
function addNewCar(car){
	cars.push(car);
	var sTempTableRow='<tr><td>'+car.make+'</td><td>'+car.reg+'</td><td>'+car.start+'</td><td>'+car.end+'</td></tr>';
    $('#cartable').append(sTempTableRow);
}


function addTimeline(car){
	var sTempTimeline = '<div class="cd-timeline-block"><div class="cd-timeline-img"><img src="" alt="Picture"></div><div class="cd-timeline-content"><h2>Title of section 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p><span class="cd-date">'+car.start+ ' - ' +car.end+'</span></div> </div>';
	$('#cd-timeline').append(sTempTimeline);
}

$("#addButton").click(function() {
  inputs = $('.car-input');
  newCar = {
				make:inputs[0].value,
				reg:inputs[2].value,
				start:inputs[3].value,
				end:inputs[4].value
			}
	addNewCar(newCar);
	addTimeline(newCar);
});