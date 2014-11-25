<?php
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


namespace OCA\user_appchooser;

class config {

  public static function getPrefs($appIDs){
    foreach($appIDs as $app){
      $conf=\OCP\CONFIG::getUserValue( \OCP\User::getUser() , 'user_appchooser' , $app, 0);
      $display[$app]=$conf;                                                              
    }                                                                              
    return $display; 
  }

  public static function setPrefs($appID,$status){
    $conf=\OCP\CONFIG::setUserValue( \OCP\User::getUser() , 'user_appchooser' , $appID, $status);
  }
}

