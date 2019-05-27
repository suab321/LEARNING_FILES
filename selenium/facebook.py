from selenium import webdriver
from getpass import getpass

driver=webdriver.Chrome()

usr=input('Enter the username')
pwd=getpass('Enter the password')

driver.get('https://facebook.com/')

username=driver.find_element_by_id('email')
password=driver.find_element_by_id('pass')

username.send_keys(usr)
password.send_keys(pwd)

login_button=driver.find_element_by_id('u_0_2')
login_button.submit()
