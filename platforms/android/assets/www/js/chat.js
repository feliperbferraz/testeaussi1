		jQuery(function($){
			var socket = io.connect();
			var $messageForm = $('#send-message');
			var $messageBox = $('#message');
			var $chat = $('#chat');

			var $topclass = $('.nav_md');
			var $containerBody = $topclass.find('.container .body');
			var $Maincontainer = $containerBody.find('.main_container');
			var $rightColumn = $Maincontainer.find('.right_col');
			var $dashboard = $rightColumn.find('.row');

			var $card = $dashboard.find('.col-md-4 .col-sm-4 .col-xs-12');
			var $simples = $('col-md-4');

			$messageForm.submit(function(e){
				e.preventDefault();
				socket.emit('send message', $messageBox.val());
				$messageBox.val('');
			});
			
			socket.on('new message', function(data){
				if(data){
					console.log('test');

				//$('.felipe').append(data);
				
				// $('.felipe').prepend(data + '<div class="x_content">'+ '</div>' + '</div>'+ '</div>');
				
				$('.felipe').prepend('<div class="col-md-4 col-sm-4 col-xs-12"><div class="x_panel tile"><div class="x_title"><h5><strong>Padaria São João - Rio de Janeiro - RJ</strong></h5><ul class="nav navbar-right panel_toolbox"><li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li><li class="dropdown"></ul><div class="clearfix"></div></div>' + '<div class="x_content">' + data + '</div>' + '</div>'+ '</div>');
				
				}
			});
		});

		/*
					<div class="x_panel tile ">
        				<div class="x_title">
                                    <h5><strong>Padaria São João - Rio de Janeiro - RJ</strong></h5>
                                    <ul class="nav navbar-right panel_toolbox">
                                        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                        </li>
                                        <li class="dropdown">
                                    </ul>
                                    <div class="clearfix"></div>
                        </div>
                        <div class="x_content">

                        </div>
                    </div>

		*/