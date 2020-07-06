from djongo import models


class Event(models.Model):
    id = models.CharField(max_length=250, primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500)
    from_date = models.DateTimeField()
    to_date = models.DateTimeField()
