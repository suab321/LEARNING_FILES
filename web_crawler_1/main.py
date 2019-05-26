import threading
from queue import Queue
from spider import Spider
from domain_parser import get_domain_name
from ist import *

PROJECT_NAME="w3schools"
HOME_PAGE="https://www.w3schools.com"
DOMAIN_NAME=get_domain_name(HOME_PAGE)
QUEUE_FILE=PROJECT_NAME+'/queue.txt'
CRAWLED_FILE=PROJECT_NAME+'/crawled.txt'
THREADS=10

queue=Queue()

Spider(PROJECT_NAME,HOME_PAGE,DOMAIN_NAME)


def create_workers():
    for _ in range(THREADS):
        t=threading.Thread(target=work)
        t.daemon=True
        t.start()


def work():
    url=queue.get()
    Spider.page_crawled(threading.current_thread().name,url)
    queue.task_done()


def create_jobs():
    for link in file_to_set(QUEUE_FILE):
        queue.put(link)
    queue.join()
    crawl()


def crawl():
    queue_links=file_to_set(QUEUE_FILE)
    if len(queue_links) > 0:
        print(str(len(queue_links))+" Links are remaining")
        create_jobs()

create_workers()
crawl()
