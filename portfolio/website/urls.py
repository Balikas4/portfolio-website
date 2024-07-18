from django.urls import path
from .views import home, download_cv, turbo

urlpatterns = [
    path('', home, name='home'),
    path('download-cv/', download_cv, name='download_cv'),
    path('turbo/', turbo, name='turbo')
]
