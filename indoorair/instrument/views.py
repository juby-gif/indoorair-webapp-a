from django.http import HttpResponse, JsonResponse
# from django.contrib.auth.models import User
from django.shortcuts import render # STEP 1 - Import
from django.shortcuts import redirect
from foundations.models import Instrument


def i_list_page(request):

    return render(request, "instrument/list.html", {})

def i_create_page(request):
    
    return render(request, "instrument/create.html", {})


def get_instruments_api(request):
    return JsonResponse({
         'version': '1.0',
    })

def post_instruments_create_api(request):
    name = request.POST.get("name")
    print(name)
    try:
        instrument = Instrument.objects.create(
            name=name,
            user=request.user
        )
        print("INSTRUMENT ID", instrument.id)
        return JsonResponse({
         'was_created': True,
        })
    except Exception as e:
        return JsonResponse({
         'was_created': False,
         'reason': str(e),
        })
