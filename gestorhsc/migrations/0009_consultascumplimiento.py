# Generated by Django 3.2.4 on 2021-09-30 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gestorhsc', '0008_metastotales'),
    ]

    operations = [
        migrations.CreateModel(
            name='ConsultasCumplimiento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ene', models.IntegerField()),
                ('feb', models.IntegerField()),
                ('mar', models.IntegerField()),
                ('abr', models.IntegerField()),
                ('may', models.IntegerField()),
                ('jun', models.IntegerField()),
                ('jul', models.IntegerField()),
                ('ago', models.IntegerField()),
                ('sep', models.IntegerField()),
                ('oct', models.IntegerField()),
                ('nov', models.IntegerField()),
                ('dic', models.IntegerField()),
                ('tot', models.IntegerField()),
            ],
        ),
    ]
