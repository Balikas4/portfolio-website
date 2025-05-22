from django import forms
from .models import Email

class EmailForm(forms.ModelForm):
    honeypot = forms.CharField(required=False, widget=forms.HiddenInput)

    class Meta:
        model = Email
        fields = ['name', 'email', 'message']  # don't include honeypot in fields!
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Your Name', 'class': 'form-input'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Your Email', 'class': 'form-input'}),
            'message': forms.Textarea(attrs={'placeholder': 'Your Message', 'class': 'form-input', 'rows': 4}),
        }
