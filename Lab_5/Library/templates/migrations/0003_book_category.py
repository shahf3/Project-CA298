# Generated by Django 3.2.12 on 2023-01-26 15:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('templates', '0002_alter_book_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.TextField(choices=[('science', 'C1'), ('history & politics', 'C2'), ('language', 'C3')], default='science'),
        ),
    ]
