import cv2
import numpy as np
import math

video=cv2.VideoCapture(0)

while True:
    _,frame=video.read()
    blur_image=cv2.GaussianBlur(frame,(3,3),0)
    hsv_frame=cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    threshold_image=cv2.inRange(hsv_frame,np.array([5,112,112]),np.array([19,255,255]))
    erode_image=cv2.erode(threshold_image,np.ones((3,3)),iterations=1)
    dilation=cv2.dilate(erode_image,np.ones((3,3)),iterations=2)
    _,binary_image=cv2.threshold(dilation,0,255,0)
    color_image=cv2.bitwise_and(frame,frame,mask=binary_image)
    contor,hierchy=cv2.findContours(binary_image,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
    try:
        drawing = np.zeros(binary_image.shape, np.uint8)
        cnt=max(contor,key=lambda x:cv2.contourArea(x))
        x,y,w,h=cv2.boundingRect(cnt)
        peri=cv2.arcLength(cnt,True)
        cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
        aprox=cv2.approxPolyDP(cnt,0.04*peri,True)
        if len(aprox) == 3:
            print(3)
            cv2.putText(frame,"Trianagle",(20,20),cv2.FONT_HERSHEY_COMPLEX,0.5,(255,0,0))
        elif len(aprox) == 4:
            print(4)
            cv2.putText(frame, "rectangle", (20,20), cv2.FONT_HERSHEY_COMPLEX, 0.5, (255, 0, 0))
        elif len(aprox) == 5:
            print(5)
            cv2.putText(frame, "pentagon", (20,20), cv2.FONT_HERSHEY_COMPLEX, 0.5, (255, 0, 0))

        cv2.drawContours(drawing,cnt,-1,(0,0,255),2)

    except:
        pass
    cv2.drawContours(binary_image,contor,-1,(255,0,0),2)
    cv2.imshow("original",frame)
    cv2.imshow("binary image",binary_image)
    cv2.imshow("contors",drawing)
    cv2.imshow("color",color_image)




    if cv2.waitKey(1) == ord('c'):
        break
