from urllib.parse import urlparse

def get_domain_name(link):
    try:
        x = get_subdomain_name(link)
        return x.split('.')[-2]+'.'+x.split('.')[-1]
    except:
        return ''


def get_subdomain_name(link):
    try:
        return urlparse(link).netloc
    except:
        return ''


