from django.shortcuts import render, redirect
from django.http import HttpResponse
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
    # Replace with the path to your CV file
    cv_path = 'static/download/cv.pdf'
    with open(cv_path, 'rb') as cv:
        response = HttpResponse(cv.read(), content_type='application/pdf')
        response['Content-Disposition'] = f'attachment; filename="cv.pdf"'
        return response
