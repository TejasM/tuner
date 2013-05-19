from __future__ import division
from collections import defaultdict
from datetime import timedelta, datetime
from functools import wraps
import json
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core import serializers
from django.core.urlresolvers import reverse
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.utils import timezone
from django.utils.safestring import mark_safe
from django.views.decorators.csrf import csrf_exempt

import pytz
from mysite import settings

from tuner.models import Session, Series, Stats, Question, Stat, send_event, Poll, Choice


def index(request):
    return render(request, 'tuner/SetupScreen.html')


def start(request):
    video = request.GET.get('video_input', '')
    if video != '':
        request.session['video'] = video
        return render(request, 'tuner/startScreen.html', {'video': request.session['video']})
    else:
        return redirect(reverse('tuner:index'))


def startPlayback(request):
    return render(request, 'tuner/startScreen.html', {'video': request.session['video']})


def userInput(request):
    return render(request, 'tuner/UserInput.html')


def analytics(request):
    return render(request, 'tuner/Analytics.html')


def fav_scenes(request):
    return render(request, 'tuner/Fav_scenes.html')