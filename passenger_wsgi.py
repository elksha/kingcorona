import os, sys
 
#automatically finds application's current path
nginx_configuration= os.path.dirname(__file__)
project = os.path.dirname(nginx_configuration)
workspace = os.path.dirname(project)
sys.path.append(workspace) 
 
os.environ['DJANGO_SETTINGS_MODULE'] = 'testapp.settings'
import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()