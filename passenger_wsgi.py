"""
WSGI config for kingcorona project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os
import sys
sys.path.insert(0, '/var/www/kingcorona/kingcorona/')

from django.core.wsgi import get_wsgi_application

os.environ["DJANGO_SETTINGS_MODULE"]="personalproject.settings"

application = get_wsgi_application()
