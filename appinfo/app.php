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

OCP\App::checkAppEnabled('user_appchooser');

\OCP\App::register(array(
    'id' => 'user_appchooser',
    'order' => 990,
    'name' => 'user_appchooser'
));

OC::$CLASSPATH['OCA\user_appchooser\config']   = 'apps/user_appchooser/lib/appchooserconfig.php';

\OCP\Util::addScript('user_appchooser', 'script');
\OCP\Util::addStyle('user_appchooser', 'style');



