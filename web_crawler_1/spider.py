from ist import *
from link_finder import get_link

class Spider:
    project_name=''
    base_url=''
    domain_name=''
    queue_file=''
    crawled_file=''
    crawled_set=set()
    queue_set=set()

    def __init__(self,project_name,base_url,domain_name):
        Spider.project_name=project_name
        Spider.base_url=base_url
        Spider.domain_name=domain_name
        Spider.queue_file=Spider.project_name+'/queue.txt'
        Spider.crawled_file = Spider.project_name + '/crawled.txt'
        self.boot()
        self.page_crawled('First page',Spider.base_url)

    @staticmethod
    def boot():
        create_project(Spider.project_name)
        create_file(Spider.project_name,Spider.base_url)
        Spider.queue_set.add(Spider.base_url)
        Spider.queue_set=file_to_set(Spider.queue_file)
        Spider.crawled_set=file_to_set(Spider.crawled_file)

    @staticmethod
    def page_crawled(thread_name,page_url):
        if page_url not in Spider.crawled_set:
            print(thread_name+' crawling '+ page_url)
            print('Queueu '+str(len(Spider.queue_set))+' | Crawled'+str(len(Spider.crawled_set)))
            Spider.add_links_to_queue(Spider.gather_link(page_url))
            Spider.queue_set.remove(page_url)
            Spider.crawled_set.add(page_url)
            Spider.update_files()
    @staticmethod
    def gather_link(page_url):
        links=set()
        try:
            links=get_link(Spider.base_url,page_url)
        except:
            print("This link is not working "+page_url)
            pass
        return links
    @staticmethod
    def add_links_to_queue(links):
        for url in links:
            if url in Spider.queue_set:
                continue
            if url in Spider.crawled_set:
                continue
            if Spider.domain_name not in url:
                continue
            Spider.queue_set.add(url)
    @staticmethod
    def update_files():
        set_to_file(Spider.queue_file,Spider.queue_set)
        set_to_file(Spider.crawled_file,Spider.crawled_set)
