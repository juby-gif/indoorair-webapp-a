from django.shortcuts import render
from django.http import JsonResponse

def retrieve_profile_page(request):
    return render(request, "profile_a/retrieve.html",{},)

def update_profile_page(request):
    return render(request, "profile_a/update.html",{},)
def update_profile_api(request):

  return JsonResponse({

       })
def retrieve_profile_api(request):

  return JsonResponse({

       })
