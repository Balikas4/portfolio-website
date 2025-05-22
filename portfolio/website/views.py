from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseBadRequest
from django.contrib.staticfiles import finders
from django.contrib import messages
from django.core.mail import send_mail
from .forms import EmailForm

def home(request):
    if request.method == 'POST':
        form = EmailForm(request.POST)
        if form.is_valid():
            # Check honeypot field
            if form.cleaned_data.get('honeypot'):
                return HttpResponseBadRequest("Bot detected.")

            form.save()
            send_mail(
                subject='New Form Submission',
                message='A new form has been submitted on your website.',
                from_email='balikas4@gmail.com',
                recipient_list=['balikas4@gmail.com'],
                fail_silently=False,
            )
            messages.success(request, 'Thank you! Your message has been sent.')
            return redirect('home')
    else:
        form = EmailForm()

    return render(request, 'main.html', {'form': form})


def download_cv(request):
    # Use Django's staticfiles finders to locate the file
    cv_path = finders.find('download/balys.leimontas.pdf')
    if not cv_path:
        pass

    # Send email notification when the CV is downloaded
    # send_mail(
    #     subject='CV Download Notification',  # Subject of the email
    #     message='Your CV has been downloaded from your website.',  # Body of the email
    #     from_email='balikas4@gmail.com',  # From email
    #     recipient_list=['balikas4@gmail.com'],  # List of recipients
    #     fail_silently=False,  # Fail loudly on errors
    # )

    with open(cv_path, 'rb') as cv:
        response = HttpResponse(cv.read(), content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="balys.leimontas.pdf"'
        return response
    
def custom_404_view(request, exception):
    return render(request, '404.html', status=404)

def default_example(request):
    return render(request, 'default_example.html')

def example1(request):
    return render(request, 'example1.html')

def example2(request):
    return render(request, 'example2.html')

def example3(request):
    return render(request, 'example3.html')

def fabric(request):
    return render(request, 'fabric.html')