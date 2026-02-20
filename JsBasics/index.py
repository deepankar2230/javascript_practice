strr = 'Python'
print(strr[0:2])

def check_string(str):
    if str[0:2] == 'Py':
        return str
    else:
        return 'Py'+str

print(check_string(strr))