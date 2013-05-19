from django.conf.urls import patterns, include, url, handler500

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from index import views
import tuner

admin.autodiscover()


urlpatterns = patterns('',
                       # Examples:
                       url(r'^tuner/', include('tuner.urls', namespace="tuner")),
                       url(r'^$', views.index, name='index'),
                       url(r'^admin/', include(admin.site.urls)),
)
