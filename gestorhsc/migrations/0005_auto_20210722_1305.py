# Generated by Django 3.2.4 on 2021-07-22 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestorhsc', '0004_agenda'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agenda',
            name='end',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='agenda',
            name='start',
            field=models.DateTimeField(),
        ),
    ]
