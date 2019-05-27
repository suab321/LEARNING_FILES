from selenium import webdriver


driver=webdriver.Chrome()

driver.get('https://web.whatsapp.com/')

usr=input('Enter the name of user to whom you want to sent')

msg=input('Enter your msg')

count=int(input('no of msg'))

input('Press any alphabet to continue after scanning code')

# to=driver.find_element_by_class_name('_3j7s9').find_element_by_class_name('_2FBdJ').find_element_by_class_name('_25Ooe').find_element_by_tag_name('span').find
to=driver.find_element_by_xpath('//span[@title="{}"]'.format(usr))
to.click()
text=driver.find_element_by_class_name('_2S1VP')
text.send_keys(msg)

button=driver.find_element_by_class_name('_35EW6')

button.click()