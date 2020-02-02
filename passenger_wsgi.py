import os
import sys
sys.path.insert(0,'/var/www/kingcorona/kingcorona/')

from django.core.wsgi import get_wsgi_application

os.environ["DJANGO_SETTINGS_MODULE"]="kingcorona.settings"

application=get_wsgi_application()