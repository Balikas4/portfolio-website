from django.urls import path
from .views import home, download_cv, example1, example2, fabric

urlpatterns = [
    path('', home, name='home'),
    path('download-cv/', download_cv, name='download_cv'),
    path('example1/', example1, name='example1'),  # New URL for example1
    path('example2/', example2, name='example2'), 
    path('shirt/', fabric, name='fabric'),
]
