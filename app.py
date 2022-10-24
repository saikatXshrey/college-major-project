from flask import Flask, request, jsonify
import util

app = Flask(__name__)

@app.route('/',methods=['GET'])
def hello_world():
    return 'Welcome to Bangalore Housing Price Fetcher Server🤳'

@app.route('/getlocation',methods=['GET'])
def getlocation():
    response=jsonify({'location':util.getlocations()})
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route('/getpredictedprice', methods=['POST'])
def getpredictedprice():
    total_sqft=float(request.form['total_sqft'])
    bath=int(request.form['bath'])
    bhk=int(request.form['bhk'])
    location=request.form['location']
    response=jsonify({
        'estimated_price':util.getpredictedprice(total_sqft,bath,bhk,location)
    })   
    response.headers.add('Access-Control-Allow-Origin','*')
    return response 


if __name__=="__main__":
    print("starting flask server for bangalore apartment price prediction.....")
    util.loadsavedartifacts()
    app.run()
