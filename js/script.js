/*                                                                                                                                
 * user_appchooser, ownCloud menu customization app 
 *                                                                                                                                  
 * @author Christian Brinch                                                                                                           
 * @copyright 2014 Christian Brinch, DeIC.dk                                                                                
 *                                                                                                                                  
 * This library is free software; you can redistribute it and/or                                                                    
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE                                                               
 * License as published by the Free Software Foundation; either                                                                     
 * version 3 of the License, or any later version.                                                                                  
 *                                                                                                                                  
 * This library is distributed in the hope that it will be useful,                                                                  
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                                                                   
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                                                                    
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.                                                                              
 *                                                                                                                                  
 * You should have received a copy of the GNU Lesser General Public                                                                 
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.                                                    
 *                                                                                                                                  
 */  

$(document).ready(
    $(function(){    

      var appIDs = $('div.wrapper li').map( function() {
        return $(this).data('id');
      }).get();

      appIDs.splice(appIDs.indexOf('files_index'),1);
      appIDs.splice(appIDs.indexOf('user_appchoser'),1);

      $.ajax({                                                                       
        url: OC.filePath('user_appchooser', 'ajax', 'config.php'),                    
        async: false,                                                                
        data: { appIDs: appIDs }, 
        type: "POST",                                                                
        success: function(result) {                                                  
          if(!result.status){
            var config = $.parseJSON(result); 
            $.each(config, function(app, value) {
              $('div.wrapper li[data-id='+app+']').append('<input type="checkbox" name="'+app+'" value="1">');
              $('div.wrapper li[data-id='+app+']').css('display','block');
              if(value==0){
                $('div.wrapper li[data-id='+app+']').hide();
              }
              if(value==1){
                $('div.wrapper li[data-id='+app+'] input').hide();
                $('div.wrapper li[data-id='+app+'] input').prop('checked', 1);
              }
            });
            $('div.wrapper li[data-id="user_appchooser"]').css('display','block'); 
          }
        }
      });   

      $('li[data-id="user_appchooser"]').live('click', function() {
          $('div.wrapper li').not(':first').not(':last').show('slow','linear');
          $('div.wrapper li input').show();
          $('div.wrapper li[data-id="user_appchooser"]').hide();
          $('div.wrapper').append('<div class="button">Ok</div>')
      });      
     
      $('div.wrapper div.button').live('click', function() {
          $('div.wrapper li input:not(:checked)').parent('li').hide('slow','linear');
          $('div.wrapper li input:checked').hide();
          $('div.wrapper li[data-id="user_appchooser"]').show();
          $('div.wrapper div.button').remove();
      }); 

      $('div.wrapper li input').live('change', function() {
        if($(this).prop('checked')){
          var value = 1;
        } else {
          var value = 0;
        }
        $.ajax({                                                                       
          url: OC.filePath('user_appchooser', 'ajax', 'toggle.php'),                    
          async: false,                                                                
          data: { appID: $(this).attr('name'), stat: value }, 
          type: "POST",                                                                
        });         
      });
    })
) 
