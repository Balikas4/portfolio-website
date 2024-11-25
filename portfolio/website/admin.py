from django.contrib import admin
from .models import Email

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'submitted_at', 'message')
    search_fields = ('email',)
    ordering = ('-submitted_at',)
