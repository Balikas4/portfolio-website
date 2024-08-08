from django.shortcuts import render, redirect
from django.http import HttpResponse, Http404
from django.contrib.staticfiles import finders
from django.contrib import messages
from .forms import EmailForm

def home(request):
    if request.method == 'POST':
        form = EmailForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you! Your message has been sent.')
            return redirect('home')  # Redirect to the same page to refresh
    else:
        form = EmailForm()

    return render(request, 'main.html', {'form': form})

def download_cv(request):
    # Use Django's staticfiles finders to locate the file
    cv_path = finders.find('download/balys.leimontas.pdf')
    if not cv_path:
        raise Http404("CV file not found")

    with open(cv_path, 'rb') as cv:
        response = HttpResponse(cv.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="balys.leimontas.pdf"'
        return response
    
