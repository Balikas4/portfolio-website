from django.urls import path
from .views import home, download_cv

urlpatterns = [
    path('', home, name='home'),
    path('download-cv/', download_cv, name='download_cv'),
]