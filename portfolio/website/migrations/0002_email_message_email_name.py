# Generated by Django 5.0.7 on 2024-07-18 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='email',
            name='message',
            field=models.TextField(blank=True, max_length=100000),
        ),
        migrations.AddField(
            model_name='email',
            name='name',
            field=models.CharField(db_index=True, default='default', max_length=100),
            preserve_default=False,
        ),
    ]
