# Generated by Django 3.2.12 on 2023-03-01 12:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cheese',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Crust',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('address', models.TextField()),
                ('email', models.EmailField(max_length=254)),
                ('card_number', models.CharField(default='12334545', max_length=16)),
                ('expiry_date', models.CharField(max_length=8)),
                ('cvv', models.CharField(default=123, max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Sauce',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Topping',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Pizza',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('cheese', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='PizzaApp.cheese')),
                ('crust', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='PizzaApp.crust')),
                ('sauce', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='PizzaApp.sauce')),
                ('size', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='PizzaApp.size')),
                ('toppings', models.ManyToManyField(blank=True, related_name='topping', to='PizzaApp.Topping')),
            ],
        ),
    ]
