# Create your views here.
from functools import wraps
from django.contrib import messages
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse
from django.shortcuts import render, redirect
import sys


def index(request):
    return redirect(reverse('tuner:index'))
