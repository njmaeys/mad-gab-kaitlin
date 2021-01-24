from django.urls import path

from . import views

urllpatterns = [
  path('', views.index, name='index')
]