
from django.forms import ModelForm, ModelMultipleChoiceField,CheckboxSelectMultiple, ModelChoiceField
from .models import *
import re
from django import forms
from django.core.exceptions import ValidationError

class PizzaForm(ModelForm):
    class Meta:
        model = Pizza
        fields = ['toppings', 'cheese', 'size', 'sauce', 'crust']

    toppings = ModelMultipleChoiceField(queryset=Topping.objects.all(), widget=CheckboxSelectMultiple)
    size = ModelChoiceField(queryset=Size.objects.all())
    sauce = ModelChoiceField(queryset=Sauce.objects.all())
    cheese = ModelChoiceField(queryset=Cheese.objects.all())
    crust = ModelChoiceField(queryset=Crust.objects.all())


class CustomerForm(ModelForm):
    class Meta:
        model = Customer
        fields = ['name', 'address', 'email', 'card_number', 'expiry_date', 'cvv']
    
    def clean_card_number(self):
        data = self.cleaned_data
        card_number = data['card_number']
        pattern = re.compile('^[0-9]{16}$')
        if not pattern.match(card_number):
            raise forms.ValidationError("Validation Error! Enter Digits Only")
        return card_number

    def clean_cvv(self):
        data = self.cleaned_data
        cvv = data['cvv']
        pattern = re.compile('^[0-9]{3}$')
        if not pattern.match(cvv):
            raise forms.ValidationError("Validation Error! Enter Digits Only")
        return cvv

    def clean(self):
        cleaned_data = super().clean()
        return cleaned_data
