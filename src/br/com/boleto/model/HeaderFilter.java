package br.com.boleto.model;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Locale;
import java.util.TimeZone;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

/**
 * Posted by felipegaucho on August 8, 2007 at 2:29 PM EDT
 * Expires Http header: the magic number of YSlow
 * http://weblogs.java.net/blog/felipegaucho/archive/2007/08/expires_http_he.html
 */
public class HeaderFilter implements Filter {

	public void init(FilterConfig filterConfig) throws ServletException {}
	
	public void destroy() {}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		Calendar calendar = new GregorianCalendar();
		calendar.add(Calendar.DAY_OF_WEEK, 7);
		
		long seconds = calendar.getTimeInMillis() / 1000;
		
		((HttpServletResponse) response).setHeader("Cache-Control", "PUBLIC, max-age=" + seconds + ", must-revalidate");
		((HttpServletResponse) response).setHeader("Expires", htmlExpiresDateFormat().format(calendar.getTime()));
		
		// Continue
		chain.doFilter(request, response);
	}

	public static DateFormat htmlExpiresDateFormat() {
        DateFormat httpDateFormat = new SimpleDateFormat("EEE, dd MMM yyyy HH:mm:ss z", Locale.US);
        httpDateFormat.setTimeZone(TimeZone.getTimeZone("GMT"));
        return httpDateFormat;
    }
}
