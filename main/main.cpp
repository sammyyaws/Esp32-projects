#include <iostream>
#include <freertos/FreeRTOS.h>
#include  <freertos/task.h>
#include <driver/gpio.h>

extern "C" void app_main();
    
extern "C" void app_main(void)
{
const gpio_num_t ledPin= GPIO_NUM_15;
gpio_config_t io_config{};
io_config.mode=GPIO_MODE_OUTPUT;
io_config.pin_bit_mask= 1ULL<<ledPin;
io_config.pull_down_en= GPIO_PULLDOWN_DISABLE;
io_config.pull_up_en= GPIO_PULLUP_DISABLE;
io_config.intr_type=GPIO_INTR_DISABLE;
gpio_config(&io_config);

    while(true){
   gpio_set_level(ledPin,1);
   vTaskDelay(pdMS_TO_TICKS(500));
   gpio_set_level(ledPin,0);
   vTaskDelay(pdMS_TO_TICKS(400));
    };
}