import os


def create_project(name):
    if not os.path.exists(name):
        os.mkdir(name)

def create_file(directory,base_url):

    queue=directory+'/queue.txt'
    crawled=directory+'/crawled.txt'
    if not os.path.isfile(queue):
        make_file(queue,base_url)
    if not os.path.isfile(crawled):
        make_file(crawled,'')


def make_file(name,data):

    f=open(name,'w')
    f.write(data)
    f.close()

def append_to_file(data,name):
    f=open(name,'a')
    f.write(data+'\n')
    f.close()

def file_to_set(name):
    results = set()
    with open(name,'r') as file:
        for line in file:
            results.add(line.replace('\n',''))
    return results

def delete_file_contents(file):
    with open(file,'w'):
        pass

def set_to_file(file,data):
    delete_file_contents(file)
    for link in sorted(data):
        append_to_file(link,file)


