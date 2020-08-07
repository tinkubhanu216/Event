from djongo import models


class Event(models.Model):
    id = models.CharField(max_length=32, primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    from_date = models.DateField()
    from_time = models.TimeField()
    to_date = models.DateField()
    to_time = models.TimeField()
