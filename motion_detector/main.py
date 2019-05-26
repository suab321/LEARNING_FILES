import cv2
import numpy as np

video=cv2.VideoCapture(0)

face=cv2.CascadeClassifier('face.xml')
record=0
while video.isOpened():
    _,frame=video.read()
    ROI_image=frame[10:200,10:600]
    cv2.rectangle(frame,(10,10),(600,200),(0,255,0),2)
    blur_image=cv2.GaussianBlur(ROI_image,(3,3),0)

    frame_hsv_image=cv2.cvtColor(frame,cv2.COLOR_BGR2HSV)
    ROI_hsv_image=cv2.cvtColor(blur_image,cv2.COLOR_BGR2HSV)

    erode_image = cv2.erode(ROI_hsv_image, np.ones((1, 1)), iterations=2)
    dilate_image = cv2.dilate(erode_image, np.ones((1, 1)), iterations=4)
    color_filtered_image=cv2.inRange(dilate_image,np.array([0,0,0]),np.array([180,255,30]))
    _,binary=cv2.threshold(color_filtered_image,0,127,0)
    contour,heiarchy=cv2.findContours(binary,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)

    try:
        contor=max(contour,key=lambda cx:cv2.contourArea(cx))
        x,y,w,h=cv2.boundingRect(contor)
        cv2.rectangle(ROI_image,(x,y),(x+w,y+w),(0,0,255),2)
        M=cv2.moments(contor)
        cx=int(M['m10']/M['m00'])
        if record:
            if cx>record:
                if cx-record>15:
                    print("Move left")
            elif(cx<record):
                if record-cx>15:
                    print("Move right")
        record = cx

    except:
        pass
    cv2.imshow("original",frame)
    cv2.imshow("Binary image",binary)
    cv2.imshow("ROI",ROI_image)

    if cv2.waitKey(1) == ord('c'):
        break