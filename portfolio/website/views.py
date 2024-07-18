from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404
from django.contrib.staticfiles import finders
from .forms import EmailForm

def home(request):
    if request.method == 'POST':
        form = EmailForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('download_cv')
    else:
        form = EmailForm()

    return render(request, 'main.html', {'form': form})

def download_cv(request):
    # Use Django's staticfiles finders to locate the file
    cv_path = finders.find('download/cv.pdf')
    if not cv_path:
        raise Http404("CV file not found")

    with open(cv_path, 'rb') as cv:
        response = HttpResponse(cv.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="cv.pdf"'
        return response
    
def turbo(request):
    return render(request, 'turbo.html')