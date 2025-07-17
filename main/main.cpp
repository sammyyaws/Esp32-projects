#include<cstdio>

using namespace std;
extern "C"{
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "driver/gpio.h"
}



 extern "C" void app_main(){

gpio_num_t pin= GPIO_NUM_2;
gpio_set_direction(pin,GPIO_MODE_OUTPUT);
printf("The code is working\n");
while(true){
    gpio_set_level(pin,1);
    vTaskDelay(100/portTICK_PERIOD_MS);
        printf("The Led is on\n");
    gpio_set_level(pin,0);
    vTaskDelay(100/portTICK_PERIOD_MS);
   
};
}