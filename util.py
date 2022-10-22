import json
import pickle
import numpy as np

__model=None
__datacolumns=None
__locations=None


def loadsavedartifacts():
    global __datacolumns
    global __model

    with open("./artifacts/columns.json",'r') as f:
        __datacolumns=json.load(f)['data_columns']

    with open("./artifacts/bapp.pkl",'rb') as f:
        __model=pickle.load(f)

    #print(__datacolumns)

def getlocations():
    loadsavedartifacts()
    global __locations
    __locations=__datacolumns[5:]
    return __locations

def getpredictedprice(total_sqft,bath,bhk,location):
    loadsavedartifacts()
    try:
        index=__datacolumns.index(location.lower())
    except:
        index=-1
    
    x=np.zeros(len(__datacolumns))
    x[0]=total_sqft
    x[1]=bath
    x[2]=bhk
    if index>=0:
        x[index]=1

    return round(__model.predict([x])[0],2)




if __name__=="__main__":
    loadsavedartifacts()
    print(getpredictedprice(1500,2,3,'1st phase JP Nagar'))


