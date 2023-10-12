# Generated by Django 3.2.12 on 2023-02-17 13:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('templates', '0003_book_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.TextField()),
            ],
        ),
        migrations.RenameField(
            model_name='book',
            old_name='synopsis',
            new_name='genre',
        ),
        migrations.RemoveField(
            model_name='book',
            name='category',
        ),
        migrations.RemoveField(
            model_name='book',
            name='price',
        ),
        migrations.RemoveField(
            model_name='book',
            name='year',
        ),
        migrations.AddField(
            model_name='book',
            name='isbn',
            field=models.CharField(default=2, max_length=13),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='book',
            name='release_year',
            field=models.IntegerField(default=2022),
        ),
        migrations.AddField(
            model_name='book',
            name='stock',
            field=models.IntegerField(default=1),
        ),
        migrations.AlterField(
            model_name='book',
            name='title',
            field=models.TextField(unique=True),
        ),
        migrations.CreateModel(
            name='Borrow',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('due_date', models.DateField()),
                ('is_returned', models.BooleanField()),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='templates.book')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='templates.customer')),
            ],
        ),
    ]